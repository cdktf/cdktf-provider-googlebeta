# `googleStorageBucketObject` Submodule <a name="`googleStorageBucketObject` Submodule" id="@cdktf/provider-google-beta.googleStorageBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageBucketObject <a name="GoogleStorageBucketObject" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object google_storage_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket_object

googleStorageBucketObject.GoogleStorageBucketObject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  name: str,
  cache_control: str = None,
  content: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  customer_encryption: GoogleStorageBucketObjectCustomerEncryption = None,
  detect_md5_hash: str = None,
  event_based_hold: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_name: str = None,
  metadata: typing.Mapping[str] = None,
  retention: GoogleStorageBucketObjectRetention = None,
  source: str = None,
  storage_class: str = None,
  temporary_hold: typing.Union[bool, IResolvable] = None,
  timeouts: GoogleStorageBucketObjectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.cacheControl">cache_control</a></code> | <code>str</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.content">content</a></code> | <code>str</code> | Data as string to be uploaded. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.contentDisposition">content_disposition</a></code> | <code>str</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.contentEncoding">content_encoding</a></code> | <code>str</code> | Content-Encoding of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.contentLanguage">content_language</a></code> | <code>str</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.customerEncryption">customer_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a></code> | customer_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.detectMd5Hash">detect_md5_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#detect_md5hash GoogleStorageBucketObject#detect_md5hash}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.eventBasedHold">event_based_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an object is under event-based hold. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#id GoogleStorageBucketObject#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Resource name of the Cloud KMS key that will be used to encrypt the object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.retention">retention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a></code> | retention block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.source">source</a></code> | <code>str</code> | A path to the data you want to upload. Must be defined if content is not. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.storageClass">storage_class</a></code> | <code>str</code> | The StorageClass of the new bucket object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.temporaryHold">temporary_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an object is under temporary hold. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts">GoogleStorageBucketObjectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.bucket"></a>

- *Type:* str

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#bucket GoogleStorageBucketObject#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.name"></a>

- *Type:* str

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#name GoogleStorageBucketObject#name}

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.cacheControl"></a>

- *Type:* str

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#cache_control GoogleStorageBucketObject#cache_control}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.content"></a>

- *Type:* str

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#content GoogleStorageBucketObject#content}

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.contentDisposition"></a>

- *Type:* str

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#content_disposition GoogleStorageBucketObject#content_disposition}

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.contentEncoding"></a>

- *Type:* str

Content-Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#content_encoding GoogleStorageBucketObject#content_encoding}

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.contentLanguage"></a>

- *Type:* str

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#content_language GoogleStorageBucketObject#content_language}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.contentType"></a>

- *Type:* str

Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#content_type GoogleStorageBucketObject#content_type}

---

##### `customer_encryption`<sup>Optional</sup> <a name="customer_encryption" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.customerEncryption"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a>

customer_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#customer_encryption GoogleStorageBucketObject#customer_encryption}

---

##### `detect_md5_hash`<sup>Optional</sup> <a name="detect_md5_hash" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.detectMd5Hash"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#detect_md5hash GoogleStorageBucketObject#detect_md5hash}.

---

##### `event_based_hold`<sup>Optional</sup> <a name="event_based_hold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.eventBasedHold"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an object is under event-based hold.

Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#event_based_hold GoogleStorageBucketObject#event_based_hold}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#id GoogleStorageBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

Resource name of the Cloud KMS key that will be used to encrypt the object.

Overrides the object metadata's kmsKeyName value, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#kms_key_name GoogleStorageBucketObject#kms_key_name}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#metadata GoogleStorageBucketObject#metadata}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.retention"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a>

retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#retention GoogleStorageBucketObject#retention}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.source"></a>

- *Type:* str

A path to the data you want to upload. Must be defined if content is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#source GoogleStorageBucketObject#source}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.storageClass"></a>

- *Type:* str

The StorageClass of the new bucket object.

Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#storage_class GoogleStorageBucketObject#storage_class}

---

##### `temporary_hold`<sup>Optional</sup> <a name="temporary_hold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.temporaryHold"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an object is under temporary hold.

While this flag is set to true, the object is protected against deletion and overwrites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#temporary_hold GoogleStorageBucketObject#temporary_hold}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts">GoogleStorageBucketObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#timeouts GoogleStorageBucketObject#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putCustomerEncryption">put_customer_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putRetention">put_retention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetCacheControl">reset_cache_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentDisposition">reset_content_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentEncoding">reset_content_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentLanguage">reset_content_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetCustomerEncryption">reset_customer_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetDetectMd5Hash">reset_detect_md5_hash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetEventBasedHold">reset_event_based_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetRetention">reset_retention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetStorageClass">reset_storage_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetTemporaryHold">reset_temporary_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_customer_encryption` <a name="put_customer_encryption" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putCustomerEncryption"></a>

```python
def put_customer_encryption(
  encryption_key: str,
  encryption_algorithm: str = None
) -> None
```

###### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putCustomerEncryption.parameter.encryptionKey"></a>

- *Type:* str

Base64 encoded customer supplied encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#encryption_key GoogleStorageBucketObject#encryption_key}

---

###### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putCustomerEncryption.parameter.encryptionAlgorithm"></a>

- *Type:* str

The encryption algorithm. Default: AES256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#encryption_algorithm GoogleStorageBucketObject#encryption_algorithm}

---

##### `put_retention` <a name="put_retention" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putRetention"></a>

```python
def put_retention(
  mode: str,
  retain_until_time: str
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putRetention.parameter.mode"></a>

- *Type:* str

The object retention mode. Supported values include: "Unlocked", "Locked".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#mode GoogleStorageBucketObject#mode}

---

###### `retain_until_time`<sup>Required</sup> <a name="retain_until_time" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putRetention.parameter.retainUntilTime"></a>

- *Type:* str

Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#retain_until_time GoogleStorageBucketObject#retain_until_time}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#create GoogleStorageBucketObject#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#delete GoogleStorageBucketObject#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#update GoogleStorageBucketObject#update}.

---

##### `reset_cache_control` <a name="reset_cache_control" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetCacheControl"></a>

```python
def reset_cache_control() -> None
```

##### `reset_content` <a name="reset_content" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_disposition` <a name="reset_content_disposition" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentDisposition"></a>

```python
def reset_content_disposition() -> None
```

##### `reset_content_encoding` <a name="reset_content_encoding" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentEncoding"></a>

```python
def reset_content_encoding() -> None
```

##### `reset_content_language` <a name="reset_content_language" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentLanguage"></a>

```python
def reset_content_language() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_customer_encryption` <a name="reset_customer_encryption" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetCustomerEncryption"></a>

```python
def reset_customer_encryption() -> None
```

##### `reset_detect_md5_hash` <a name="reset_detect_md5_hash" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetDetectMd5Hash"></a>

```python
def reset_detect_md5_hash() -> None
```

##### `reset_event_based_hold` <a name="reset_event_based_hold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetEventBasedHold"></a>

```python
def reset_event_based_hold() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_retention` <a name="reset_retention" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetRetention"></a>

```python
def reset_retention() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_storage_class` <a name="reset_storage_class" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetStorageClass"></a>

```python
def reset_storage_class() -> None
```

##### `reset_temporary_hold` <a name="reset_temporary_hold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetTemporaryHold"></a>

```python
def reset_temporary_hold() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleStorageBucketObject resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket_object

googleStorageBucketObject.GoogleStorageBucketObject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket_object

googleStorageBucketObject.GoogleStorageBucketObject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket_object

googleStorageBucketObject.GoogleStorageBucketObject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket_object

googleStorageBucketObject.GoogleStorageBucketObject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleStorageBucketObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleStorageBucketObject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleStorageBucketObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageBucketObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.crc32C">crc32_c</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.customerEncryption">customer_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference">GoogleStorageBucketObjectCustomerEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.md5Hash">md5_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.mediaLink">media_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.outputName">output_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.retention">retention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference">GoogleStorageBucketObjectRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference">GoogleStorageBucketObjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.cacheControlInput">cache_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentDispositionInput">content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentEncodingInput">content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentLanguageInput">content_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.customerEncryptionInput">customer_encryption_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.detectMd5HashInput">detect_md5_hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.eventBasedHoldInput">event_based_hold_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.retentionInput">retention_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.storageClassInput">storage_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.temporaryHoldInput">temporary_hold_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts">GoogleStorageBucketObjectTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentLanguage">content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.detectMd5Hash">detect_md5_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.eventBasedHold">event_based_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.storageClass">storage_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.temporaryHold">temporary_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crc32_c`<sup>Required</sup> <a name="crc32_c" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.crc32C"></a>

```python
crc32_c: str
```

- *Type:* str

---

##### `customer_encryption`<sup>Required</sup> <a name="customer_encryption" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.customerEncryption"></a>

```python
customer_encryption: GoogleStorageBucketObjectCustomerEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference">GoogleStorageBucketObjectCustomerEncryptionOutputReference</a>

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `md5_hash`<sup>Required</sup> <a name="md5_hash" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.md5Hash"></a>

```python
md5_hash: str
```

- *Type:* str

---

##### `media_link`<sup>Required</sup> <a name="media_link" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.mediaLink"></a>

```python
media_link: str
```

- *Type:* str

---

##### `output_name`<sup>Required</sup> <a name="output_name" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.outputName"></a>

```python
output_name: str
```

- *Type:* str

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.retention"></a>

```python
retention: GoogleStorageBucketObjectRetentionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference">GoogleStorageBucketObjectRetentionOutputReference</a>

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.timeouts"></a>

```python
timeouts: GoogleStorageBucketObjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference">GoogleStorageBucketObjectTimeoutsOutputReference</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `cache_control_input`<sup>Optional</sup> <a name="cache_control_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.cacheControlInput"></a>

```python
cache_control_input: str
```

- *Type:* str

---

##### `content_disposition_input`<sup>Optional</sup> <a name="content_disposition_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentDispositionInput"></a>

```python
content_disposition_input: str
```

- *Type:* str

---

##### `content_encoding_input`<sup>Optional</sup> <a name="content_encoding_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentEncodingInput"></a>

```python
content_encoding_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_language_input`<sup>Optional</sup> <a name="content_language_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentLanguageInput"></a>

```python
content_language_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `customer_encryption_input`<sup>Optional</sup> <a name="customer_encryption_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.customerEncryptionInput"></a>

```python
customer_encryption_input: GoogleStorageBucketObjectCustomerEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a>

---

##### `detect_md5_hash_input`<sup>Optional</sup> <a name="detect_md5_hash_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.detectMd5HashInput"></a>

```python
detect_md5_hash_input: str
```

- *Type:* str

---

##### `event_based_hold_input`<sup>Optional</sup> <a name="event_based_hold_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.eventBasedHoldInput"></a>

```python
event_based_hold_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retention_input`<sup>Optional</sup> <a name="retention_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.retentionInput"></a>

```python
retention_input: GoogleStorageBucketObjectRetention
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `storage_class_input`<sup>Optional</sup> <a name="storage_class_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.storageClassInput"></a>

```python
storage_class_input: str
```

- *Type:* str

---

##### `temporary_hold_input`<sup>Optional</sup> <a name="temporary_hold_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.temporaryHoldInput"></a>

```python
temporary_hold_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleStorageBucketObjectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts">GoogleStorageBucketObjectTimeouts</a>]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_language`<sup>Required</sup> <a name="content_language" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `detect_md5_hash`<sup>Required</sup> <a name="detect_md5_hash" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.detectMd5Hash"></a>

```python
detect_md5_hash: str
```

- *Type:* str

---

##### `event_based_hold`<sup>Required</sup> <a name="event_based_hold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.eventBasedHold"></a>

```python
event_based_hold: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `storage_class`<sup>Required</sup> <a name="storage_class" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

---

##### `temporary_hold`<sup>Required</sup> <a name="temporary_hold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.temporaryHold"></a>

```python
temporary_hold: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageBucketObjectConfig <a name="GoogleStorageBucketObjectConfig" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket_object

googleStorageBucketObject.GoogleStorageBucketObjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  name: str,
  cache_control: str = None,
  content: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  customer_encryption: GoogleStorageBucketObjectCustomerEncryption = None,
  detect_md5_hash: str = None,
  event_based_hold: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_name: str = None,
  metadata: typing.Mapping[str] = None,
  retention: GoogleStorageBucketObjectRetention = None,
  source: str = None,
  storage_class: str = None,
  temporary_hold: typing.Union[bool, IResolvable] = None,
  timeouts: GoogleStorageBucketObjectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.bucket">bucket</a></code> | <code>str</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.name">name</a></code> | <code>str</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.cacheControl">cache_control</a></code> | <code>str</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.content">content</a></code> | <code>str</code> | Data as string to be uploaded. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentDisposition">content_disposition</a></code> | <code>str</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentEncoding">content_encoding</a></code> | <code>str</code> | Content-Encoding of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentLanguage">content_language</a></code> | <code>str</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentType">content_type</a></code> | <code>str</code> | Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.customerEncryption">customer_encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a></code> | customer_encryption block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.detectMd5Hash">detect_md5_hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#detect_md5hash GoogleStorageBucketObject#detect_md5hash}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.eventBasedHold">event_based_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an object is under event-based hold. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#id GoogleStorageBucketObject#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | Resource name of the Cloud KMS key that will be used to encrypt the object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.retention">retention</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a></code> | retention block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.source">source</a></code> | <code>str</code> | A path to the data you want to upload. Must be defined if content is not. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.storageClass">storage_class</a></code> | <code>str</code> | The StorageClass of the new bucket object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.temporaryHold">temporary_hold</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether an object is under temporary hold. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts">GoogleStorageBucketObjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#bucket GoogleStorageBucketObject#bucket}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#name GoogleStorageBucketObject#name}

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#cache_control GoogleStorageBucketObject#cache_control}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#content GoogleStorageBucketObject#content}

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#content_disposition GoogleStorageBucketObject#content_disposition}

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

Content-Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#content_encoding GoogleStorageBucketObject#content_encoding}

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#content_language GoogleStorageBucketObject#content_language}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#content_type GoogleStorageBucketObject#content_type}

---

##### `customer_encryption`<sup>Optional</sup> <a name="customer_encryption" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.customerEncryption"></a>

```python
customer_encryption: GoogleStorageBucketObjectCustomerEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a>

customer_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#customer_encryption GoogleStorageBucketObject#customer_encryption}

---

##### `detect_md5_hash`<sup>Optional</sup> <a name="detect_md5_hash" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.detectMd5Hash"></a>

```python
detect_md5_hash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#detect_md5hash GoogleStorageBucketObject#detect_md5hash}.

---

##### `event_based_hold`<sup>Optional</sup> <a name="event_based_hold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.eventBasedHold"></a>

```python
event_based_hold: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an object is under event-based hold.

Event-based hold is a way to retain objects until an event occurs, which is signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects will be subject to bucket-level retention (if any).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#event_based_hold GoogleStorageBucketObject#event_based_hold}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#id GoogleStorageBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

Resource name of the Cloud KMS key that will be used to encrypt the object.

Overrides the object metadata's kmsKeyName value, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#kms_key_name GoogleStorageBucketObject#kms_key_name}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#metadata GoogleStorageBucketObject#metadata}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.retention"></a>

```python
retention: GoogleStorageBucketObjectRetention
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a>

retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#retention GoogleStorageBucketObject#retention}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.source"></a>

```python
source: str
```

- *Type:* str

A path to the data you want to upload. Must be defined if content is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#source GoogleStorageBucketObject#source}

---

##### `storage_class`<sup>Optional</sup> <a name="storage_class" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.storageClass"></a>

```python
storage_class: str
```

- *Type:* str

The StorageClass of the new bucket object.

Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE, ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#storage_class GoogleStorageBucketObject#storage_class}

---

##### `temporary_hold`<sup>Optional</sup> <a name="temporary_hold" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.temporaryHold"></a>

```python
temporary_hold: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether an object is under temporary hold.

While this flag is set to true, the object is protected against deletion and overwrites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#temporary_hold GoogleStorageBucketObject#temporary_hold}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectConfig.property.timeouts"></a>

```python
timeouts: GoogleStorageBucketObjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts">GoogleStorageBucketObjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#timeouts GoogleStorageBucketObject#timeouts}

---

### GoogleStorageBucketObjectCustomerEncryption <a name="GoogleStorageBucketObjectCustomerEncryption" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket_object

googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption(
  encryption_key: str,
  encryption_algorithm: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption.property.encryptionKey">encryption_key</a></code> | <code>str</code> | Base64 encoded customer supplied encryption key. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | The encryption algorithm. Default: AES256. |

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

Base64 encoded customer supplied encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#encryption_key GoogleStorageBucketObject#encryption_key}

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

The encryption algorithm. Default: AES256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#encryption_algorithm GoogleStorageBucketObject#encryption_algorithm}

---

### GoogleStorageBucketObjectRetention <a name="GoogleStorageBucketObjectRetention" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket_object

googleStorageBucketObject.GoogleStorageBucketObjectRetention(
  mode: str,
  retain_until_time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention.property.mode">mode</a></code> | <code>str</code> | The object retention mode. Supported values include: "Unlocked", "Locked". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention.property.retainUntilTime">retain_until_time</a></code> | <code>str</code> | Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention.property.mode"></a>

```python
mode: str
```

- *Type:* str

The object retention mode. Supported values include: "Unlocked", "Locked".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#mode GoogleStorageBucketObject#mode}

---

##### `retain_until_time`<sup>Required</sup> <a name="retain_until_time" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention.property.retainUntilTime"></a>

```python
retain_until_time: str
```

- *Type:* str

Time in RFC 3339 (e.g. 2030-01-01T02:03:04Z) until which object retention protects this object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#retain_until_time GoogleStorageBucketObject#retain_until_time}

---

### GoogleStorageBucketObjectTimeouts <a name="GoogleStorageBucketObjectTimeouts" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket_object

googleStorageBucketObject.GoogleStorageBucketObjectTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#create GoogleStorageBucketObject#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#delete GoogleStorageBucketObject#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#update GoogleStorageBucketObject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#create GoogleStorageBucketObject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#delete GoogleStorageBucketObject#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_storage_bucket_object#update GoogleStorageBucketObject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageBucketObjectCustomerEncryptionOutputReference <a name="GoogleStorageBucketObjectCustomerEncryptionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket_object

googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketObjectCustomerEncryption
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectCustomerEncryption">GoogleStorageBucketObjectCustomerEncryption</a>

---


### GoogleStorageBucketObjectRetentionOutputReference <a name="GoogleStorageBucketObjectRetentionOutputReference" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket_object

googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.retainUntilTimeInput">retain_until_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.retainUntilTime">retain_until_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `retain_until_time_input`<sup>Optional</sup> <a name="retain_until_time_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.retainUntilTimeInput"></a>

```python
retain_until_time_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `retain_until_time`<sup>Required</sup> <a name="retain_until_time" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.retainUntilTime"></a>

```python
retain_until_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetentionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageBucketObjectRetention
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectRetention">GoogleStorageBucketObjectRetention</a>

---


### GoogleStorageBucketObjectTimeoutsOutputReference <a name="GoogleStorageBucketObjectTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_storage_bucket_object

googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts">GoogleStorageBucketObjectTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleStorageBucketObjectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleStorageBucketObject.GoogleStorageBucketObjectTimeouts">GoogleStorageBucketObjectTimeouts</a>]

---



