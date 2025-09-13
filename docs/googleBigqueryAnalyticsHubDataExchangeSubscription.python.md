# `googleBigqueryAnalyticsHubDataExchangeSubscription` Submodule <a name="`googleBigqueryAnalyticsHubDataExchangeSubscription` Submodule" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscription <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription google_bigquery_analytics_hub_data_exchange_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_exchange_id: str,
  data_exchange_location: str,
  data_exchange_project: str,
  location: str,
  subscription_id: str,
  destination_dataset: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset = None,
  id: str = None,
  project: str = None,
  refresh_policy: str = None,
  subscriber_contact: str = None,
  timeouts: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dataExchangeLocation">data_exchange_location</a></code> | <code>str</code> | The name of the location of the Data Exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dataExchangeProject">data_exchange_project</a></code> | <code>str</code> | The ID of the Google Cloud project where the Data Exchange is located. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the Subscription (and its linked dataset) should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Name of the subscription to create. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.destinationDataset">destination_dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | destination_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.refreshPolicy">refresh_policy</a></code> | <code>str</code> | Controls when the subscription is automatically refreshed by the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.subscriberContact">subscriber_contact</a></code> | <code>str</code> | Email of the subscriber. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dataExchangeId"></a>

- *Type:* str

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_id}

---

##### `data_exchange_location`<sup>Required</sup> <a name="data_exchange_location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dataExchangeLocation"></a>

- *Type:* str

The name of the location of the Data Exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_location GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_location}

---

##### `data_exchange_project`<sup>Required</sup> <a name="data_exchange_project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.dataExchangeProject"></a>

- *Type:* str

The ID of the Google Cloud project where the Data Exchange is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_project GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_project}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the Subscription (and its linked dataset) should reside.

This is the subscriber's desired location for the created resources.
See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Name of the subscription to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscription_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscription_id}

---

##### `destination_dataset`<sup>Optional</sup> <a name="destination_dataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.destinationDataset"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

destination_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#destination_dataset GoogleBigqueryAnalyticsHubDataExchangeSubscription#destination_dataset}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}.

---

##### `refresh_policy`<sup>Optional</sup> <a name="refresh_policy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.refreshPolicy"></a>

- *Type:* str

Controls when the subscription is automatically refreshed by the provider.

* 'ON_READ': Default value if not specified. The subscription will be refreshed every time Terraform performs a read operation (e.g., 'terraform plan', 'terraform apply', 'terraform refresh'). This ensures the state is always up-to-date.
* 'ON_STALE': The subscription will only be refreshed when its reported 'state' (an output-only field from the API) is 'STATE_STALE' during a Terraform read operation.
* 'NEVER': The provider will not automatically refresh the subscription. Default value: "ON_READ" Possible values: ["ON_READ", "ON_STALE", "NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#refresh_policy GoogleBigqueryAnalyticsHubDataExchangeSubscription#refresh_policy}

---

##### `subscriber_contact`<sup>Optional</sup> <a name="subscriber_contact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.subscriberContact"></a>

- *Type:* str

Email of the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscriber_contact GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscriber_contact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#timeouts GoogleBigqueryAnalyticsHubDataExchangeSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset">put_destination_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetDestinationDataset">reset_destination_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetRefreshPolicy">reset_refresh_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetSubscriberContact">reset_subscriber_contact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_dataset` <a name="put_destination_dataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset"></a>

```python
def put_destination_dataset(
  dataset_reference: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference,
  location: str,
  description: str = None,
  friendly_name: str = None,
  labels: typing.Mapping[str] = None
) -> None
```

###### `dataset_reference`<sup>Required</sup> <a name="dataset_reference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset.parameter.datasetReference"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#dataset_reference GoogleBigqueryAnalyticsHubDataExchangeSubscription#dataset_reference}

---

###### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset.parameter.location"></a>

- *Type:* str

The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset.parameter.description"></a>

- *Type:* str

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#description GoogleBigqueryAnalyticsHubDataExchangeSubscription#description}

---

###### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset.parameter.friendlyName"></a>

- *Type:* str

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#friendly_name GoogleBigqueryAnalyticsHubDataExchangeSubscription#friendly_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putDestinationDataset.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#labels GoogleBigqueryAnalyticsHubDataExchangeSubscription#labels}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#create GoogleBigqueryAnalyticsHubDataExchangeSubscription#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#delete GoogleBigqueryAnalyticsHubDataExchangeSubscription#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#update GoogleBigqueryAnalyticsHubDataExchangeSubscription#update}.

---

##### `reset_destination_dataset` <a name="reset_destination_dataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetDestinationDataset"></a>

```python
def reset_destination_dataset() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_refresh_policy` <a name="reset_refresh_policy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetRefreshPolicy"></a>

```python
def reset_refresh_policy() -> None
```

##### `reset_subscriber_contact` <a name="reset_subscriber_contact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetSubscriberContact"></a>

```python
def reset_subscriber_contact() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigqueryAnalyticsHubDataExchangeSubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubDataExchangeSubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigqueryAnalyticsHubDataExchangeSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubDataExchangeSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchange">data_exchange</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDataset">destination_dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lastModifyTime">last_modify_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedDatasetMap">linked_dataset_map</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedResources">linked_resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.logLinkedDatasetQueryUserEmail">log_linked_dataset_query_user_email</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationDisplayName">organization_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeIdInput">data_exchange_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocationInput">data_exchange_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProjectInput">data_exchange_project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDatasetInput">destination_dataset_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicyInput">refresh_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContactInput">subscriber_contact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocation">data_exchange_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProject">data_exchange_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicy">refresh_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContact">subscriber_contact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `data_exchange`<sup>Required</sup> <a name="data_exchange" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchange"></a>

```python
data_exchange: str
```

- *Type:* str

---

##### `destination_dataset`<sup>Required</sup> <a name="destination_dataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDataset"></a>

```python
destination_dataset: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference</a>

---

##### `last_modify_time`<sup>Required</sup> <a name="last_modify_time" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.lastModifyTime"></a>

```python
last_modify_time: str
```

- *Type:* str

---

##### `linked_dataset_map`<sup>Required</sup> <a name="linked_dataset_map" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedDatasetMap"></a>

```python
linked_dataset_map: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList</a>

---

##### `linked_resources`<sup>Required</sup> <a name="linked_resources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.linkedResources"></a>

```python
linked_resources: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList</a>

---

##### `log_linked_dataset_query_user_email`<sup>Required</sup> <a name="log_linked_dataset_query_user_email" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.logLinkedDatasetQueryUserEmail"></a>

```python
log_linked_dataset_query_user_email: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization_display_name`<sup>Required</sup> <a name="organization_display_name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationDisplayName"></a>

```python
organization_display_name: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeouts"></a>

```python
timeouts: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference</a>

---

##### `data_exchange_id_input`<sup>Optional</sup> <a name="data_exchange_id_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeIdInput"></a>

```python
data_exchange_id_input: str
```

- *Type:* str

---

##### `data_exchange_location_input`<sup>Optional</sup> <a name="data_exchange_location_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocationInput"></a>

```python
data_exchange_location_input: str
```

- *Type:* str

---

##### `data_exchange_project_input`<sup>Optional</sup> <a name="data_exchange_project_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProjectInput"></a>

```python
data_exchange_project_input: str
```

- *Type:* str

---

##### `destination_dataset_input`<sup>Optional</sup> <a name="destination_dataset_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.destinationDatasetInput"></a>

```python
destination_dataset_input: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `refresh_policy_input`<sup>Optional</sup> <a name="refresh_policy_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicyInput"></a>

```python
refresh_policy_input: str
```

- *Type:* str

---

##### `subscriber_contact_input`<sup>Optional</sup> <a name="subscriber_contact_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContactInput"></a>

```python
subscriber_contact_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

---

##### `data_exchange_location`<sup>Required</sup> <a name="data_exchange_location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeLocation"></a>

```python
data_exchange_location: str
```

- *Type:* str

---

##### `data_exchange_project`<sup>Required</sup> <a name="data_exchange_project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.dataExchangeProject"></a>

```python
data_exchange_project: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `refresh_policy`<sup>Required</sup> <a name="refresh_policy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.refreshPolicy"></a>

```python
refresh_policy: str
```

- *Type:* str

---

##### `subscriber_contact`<sup>Required</sup> <a name="subscriber_contact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriberContact"></a>

```python
subscriber_contact: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_exchange_id: str,
  data_exchange_location: str,
  data_exchange_project: str,
  location: str,
  subscription_id: str,
  destination_dataset: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset = None,
  id: str = None,
  project: str = None,
  refresh_policy: str = None,
  subscriber_contact: str = None,
  timeouts: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeId">data_exchange_id</a></code> | <code>str</code> | The ID of the data exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeLocation">data_exchange_location</a></code> | <code>str</code> | The name of the location of the Data Exchange. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeProject">data_exchange_project</a></code> | <code>str</code> | The ID of the Google Cloud project where the Data Exchange is located. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the Subscription (and its linked dataset) should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Name of the subscription to create. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.destinationDataset">destination_dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | destination_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.refreshPolicy">refresh_policy</a></code> | <code>str</code> | Controls when the subscription is automatically refreshed by the provider. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriberContact">subscriber_contact</a></code> | <code>str</code> | Email of the subscriber. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_exchange_id`<sup>Required</sup> <a name="data_exchange_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeId"></a>

```python
data_exchange_id: str
```

- *Type:* str

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_id}

---

##### `data_exchange_location`<sup>Required</sup> <a name="data_exchange_location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeLocation"></a>

```python
data_exchange_location: str
```

- *Type:* str

The name of the location of the Data Exchange.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_location GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_location}

---

##### `data_exchange_project`<sup>Required</sup> <a name="data_exchange_project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.dataExchangeProject"></a>

```python
data_exchange_project: str
```

- *Type:* str

The ID of the Google Cloud project where the Data Exchange is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#data_exchange_project GoogleBigqueryAnalyticsHubDataExchangeSubscription#data_exchange_project}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the Subscription (and its linked dataset) should reside.

This is the subscriber's desired location for the created resources.
See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Name of the subscription to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscription_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscription_id}

---

##### `destination_dataset`<sup>Optional</sup> <a name="destination_dataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.destinationDataset"></a>

```python
destination_dataset: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

destination_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#destination_dataset GoogleBigqueryAnalyticsHubDataExchangeSubscription#destination_dataset}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#id GoogleBigqueryAnalyticsHubDataExchangeSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project GoogleBigqueryAnalyticsHubDataExchangeSubscription#project}.

---

##### `refresh_policy`<sup>Optional</sup> <a name="refresh_policy" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.refreshPolicy"></a>

```python
refresh_policy: str
```

- *Type:* str

Controls when the subscription is automatically refreshed by the provider.

* 'ON_READ': Default value if not specified. The subscription will be refreshed every time Terraform performs a read operation (e.g., 'terraform plan', 'terraform apply', 'terraform refresh'). This ensures the state is always up-to-date.
* 'ON_STALE': The subscription will only be refreshed when its reported 'state' (an output-only field from the API) is 'STATE_STALE' during a Terraform read operation.
* 'NEVER': The provider will not automatically refresh the subscription. Default value: "ON_READ" Possible values: ["ON_READ", "ON_STALE", "NEVER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#refresh_policy GoogleBigqueryAnalyticsHubDataExchangeSubscription#refresh_policy}

---

##### `subscriber_contact`<sup>Optional</sup> <a name="subscriber_contact" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.subscriberContact"></a>

```python
subscriber_contact: str
```

- *Type:* str

Email of the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#subscriber_contact GoogleBigqueryAnalyticsHubDataExchangeSubscription#subscriber_contact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionConfig.property.timeouts"></a>

```python
timeouts: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#timeouts GoogleBigqueryAnalyticsHubDataExchangeSubscription#timeouts}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset(
  dataset_reference: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference,
  location: str,
  description: str = None,
  friendly_name: str = None,
  labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.datasetReference">dataset_reference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | dataset_reference block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.location">location</a></code> | <code>str</code> | The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.description">description</a></code> | <code>str</code> | A user-friendly description of the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.friendlyName">friendly_name</a></code> | <code>str</code> | A descriptive name for the dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels associated with this dataset. You can use these to organize and group your datasets. |

---

##### `dataset_reference`<sup>Required</sup> <a name="dataset_reference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.datasetReference"></a>

```python
dataset_reference: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

dataset_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#dataset_reference GoogleBigqueryAnalyticsHubDataExchangeSubscription#dataset_reference}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the dataset should reside. See https://cloud.google.com/bigquery/docs/locations for supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#location GoogleBigqueryAnalyticsHubDataExchangeSubscription#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.description"></a>

```python
description: str
```

- *Type:* str

A user-friendly description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#description GoogleBigqueryAnalyticsHubDataExchangeSubscription#description}

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

A descriptive name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#friendly_name GoogleBigqueryAnalyticsHubDataExchangeSubscription#friendly_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels associated with this dataset. You can use these to organize and group your datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#labels GoogleBigqueryAnalyticsHubDataExchangeSubscription#labels}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference(
  dataset_id: str,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.datasetId">dataset_id</a></code> | <code>str</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this dataset. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

A unique ID for this dataset, without the project name.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#dataset_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#project_id}

---

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap()
```


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources()
```


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#create GoogleBigqueryAnalyticsHubDataExchangeSubscription#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#delete GoogleBigqueryAnalyticsHubDataExchangeSubscription#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#update GoogleBigqueryAnalyticsHubDataExchangeSubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#create GoogleBigqueryAnalyticsHubDataExchangeSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#delete GoogleBigqueryAnalyticsHubDataExchangeSubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#update GoogleBigqueryAnalyticsHubDataExchangeSubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference">put_dataset_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetFriendlyName">reset_friendly_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetLabels">reset_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dataset_reference` <a name="put_dataset_reference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference"></a>

```python
def put_dataset_reference(
  dataset_id: str,
  project_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference.parameter.datasetId"></a>

- *Type:* str

A unique ID for this dataset, without the project name.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#dataset_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#dataset_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.putDatasetReference.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/resources/google_bigquery_analytics_hub_data_exchange_subscription#project_id GoogleBigqueryAnalyticsHubDataExchangeSubscription#project_id}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_friendly_name` <a name="reset_friendly_name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetFriendlyName"></a>

```python
def reset_friendly_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReference">dataset_reference</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput">dataset_reference_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput">friendly_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_reference`<sup>Required</sup> <a name="dataset_reference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReference"></a>

```python
dataset_reference: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReferenceOutputReference</a>

---

##### `dataset_reference_input`<sup>Optional</sup> <a name="dataset_reference_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.datasetReferenceInput"></a>

```python
dataset_reference_input: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetDatasetReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `friendly_name_input`<sup>Optional</sup> <a name="friendly_name_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyNameInput"></a>

```python
friendly_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDatasetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionDestinationDataset</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset">linked_dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription">linked_pubsub_subscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.listing">listing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_dataset`<sup>Required</sup> <a name="linked_dataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedDataset"></a>

```python
linked_dataset: str
```

- *Type:* str

---

##### `linked_pubsub_subscription`<sup>Required</sup> <a name="linked_pubsub_subscription" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.linkedPubsubSubscription"></a>

```python
linked_pubsub_subscription: str
```

- *Type:* str

---

##### `listing`<sup>Required</sup> <a name="listing" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.listing"></a>

```python
listing: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMapOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedDatasetMap</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.linkedDataset">linked_dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.listing">listing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linked_dataset`<sup>Required</sup> <a name="linked_dataset" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.linkedDataset"></a>

```python
linked_dataset: str
```

- *Type:* str

---

##### `listing`<sup>Required</sup> <a name="listing" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.listing"></a>

```python
listing: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResourcesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionLinkedResources</a>

---


### GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_analytics_hub_data_exchange_subscription

googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryAnalyticsHubDataExchangeSubscription.GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts">GoogleBigqueryAnalyticsHubDataExchangeSubscriptionTimeouts</a>]

---



