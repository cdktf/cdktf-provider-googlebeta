# `dataGoogleStorageBucket` Submodule <a name="`dataGoogleStorageBucket` Submodule" id="@cdktf/provider-google-beta.dataGoogleStorageBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageBucket <a name="DataGoogleStorageBucket" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_storage_bucket google_storage_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucket(scope: Construct, id: string, config: DataGoogleStorageBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig">DataGoogleStorageBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig">DataGoogleStorageBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleStorageBucket resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.isConstruct"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

dataGoogleStorageBucket.DataGoogleStorageBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformElement"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformDataSource"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.generateConfigForImport"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

dataGoogleStorageBucket.DataGoogleStorageBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleStorageBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_storage_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.autoclass">autoclass</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList">DataGoogleStorageBucketAutoclassList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList">DataGoogleStorageBucketCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.customPlacementConfig">customPlacementConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList">DataGoogleStorageBucketCustomPlacementConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.defaultEventBasedHold">defaultEventBasedHold</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.enableObjectRetention">enableObjectRetention</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList">DataGoogleStorageBucketEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.forceDestroy">forceDestroy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.hierarchicalNamespace">hierarchicalNamespace</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList">DataGoogleStorageBucketHierarchicalNamespaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.ipFilter">ipFilter</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList">DataGoogleStorageBucketIpFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.lifecycleRule">lifecycleRule</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList">DataGoogleStorageBucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList">DataGoogleStorageBucketLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.projectNumber">projectNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.publicAccessPrevention">publicAccessPrevention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.requesterPays">requesterPays</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList">DataGoogleStorageBucketRetentionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.rpo">rpo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.softDeletePolicy">softDeletePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList">DataGoogleStorageBucketSoftDeletePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.uniformBucketLevelAccess">uniformBucketLevelAccess</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList">DataGoogleStorageBucketVersioningList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList">DataGoogleStorageBucketWebsiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autoclass`<sup>Required</sup> <a name="autoclass" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.autoclass"></a>

```typescript
public readonly autoclass: DataGoogleStorageBucketAutoclassList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList">DataGoogleStorageBucketAutoclassList</a>

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.cors"></a>

```typescript
public readonly cors: DataGoogleStorageBucketCorsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList">DataGoogleStorageBucketCorsList</a>

---

##### `customPlacementConfig`<sup>Required</sup> <a name="customPlacementConfig" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.customPlacementConfig"></a>

```typescript
public readonly customPlacementConfig: DataGoogleStorageBucketCustomPlacementConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList">DataGoogleStorageBucketCustomPlacementConfigList</a>

---

##### `defaultEventBasedHold`<sup>Required</sup> <a name="defaultEventBasedHold" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.defaultEventBasedHold"></a>

```typescript
public readonly defaultEventBasedHold: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `enableObjectRetention`<sup>Required</sup> <a name="enableObjectRetention" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.enableObjectRetention"></a>

```typescript
public readonly enableObjectRetention: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.encryption"></a>

```typescript
public readonly encryption: DataGoogleStorageBucketEncryptionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList">DataGoogleStorageBucketEncryptionList</a>

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hierarchicalNamespace`<sup>Required</sup> <a name="hierarchicalNamespace" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.hierarchicalNamespace"></a>

```typescript
public readonly hierarchicalNamespace: DataGoogleStorageBucketHierarchicalNamespaceList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList">DataGoogleStorageBucketHierarchicalNamespaceList</a>

---

##### `ipFilter`<sup>Required</sup> <a name="ipFilter" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.ipFilter"></a>

```typescript
public readonly ipFilter: DataGoogleStorageBucketIpFilterList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList">DataGoogleStorageBucketIpFilterList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `lifecycleRule`<sup>Required</sup> <a name="lifecycleRule" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.lifecycleRule"></a>

```typescript
public readonly lifecycleRule: DataGoogleStorageBucketLifecycleRuleList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList">DataGoogleStorageBucketLifecycleRuleList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.logging"></a>

```typescript
public readonly logging: DataGoogleStorageBucketLoggingList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList">DataGoogleStorageBucketLoggingList</a>

---

##### `projectNumber`<sup>Required</sup> <a name="projectNumber" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.projectNumber"></a>

```typescript
public readonly projectNumber: number;
```

- *Type:* number

---

##### `publicAccessPrevention`<sup>Required</sup> <a name="publicAccessPrevention" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.publicAccessPrevention"></a>

```typescript
public readonly publicAccessPrevention: string;
```

- *Type:* string

---

##### `requesterPays`<sup>Required</sup> <a name="requesterPays" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.requesterPays"></a>

```typescript
public readonly requesterPays: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.retentionPolicy"></a>

```typescript
public readonly retentionPolicy: DataGoogleStorageBucketRetentionPolicyList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList">DataGoogleStorageBucketRetentionPolicyList</a>

---

##### `rpo`<sup>Required</sup> <a name="rpo" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.rpo"></a>

```typescript
public readonly rpo: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `softDeletePolicy`<sup>Required</sup> <a name="softDeletePolicy" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.softDeletePolicy"></a>

```typescript
public readonly softDeletePolicy: DataGoogleStorageBucketSoftDeletePolicyList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList">DataGoogleStorageBucketSoftDeletePolicyList</a>

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `uniformBucketLevelAccess`<sup>Required</sup> <a name="uniformBucketLevelAccess" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.uniformBucketLevelAccess"></a>

```typescript
public readonly uniformBucketLevelAccess: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.versioning"></a>

```typescript
public readonly versioning: DataGoogleStorageBucketVersioningList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList">DataGoogleStorageBucketVersioningList</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.website"></a>

```typescript
public readonly website: DataGoogleStorageBucketWebsiteList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList">DataGoogleStorageBucketWebsiteList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageBucketAutoclass <a name="DataGoogleStorageBucketAutoclass" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclass"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclass.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketAutoclass: dataGoogleStorageBucket.DataGoogleStorageBucketAutoclass = { ... }
```


### DataGoogleStorageBucketConfig <a name="DataGoogleStorageBucketConfig" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketConfig: dataGoogleStorageBucket.DataGoogleStorageBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.name">name</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_storage_bucket#id DataGoogleStorageBucket#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_storage_bucket#name DataGoogleStorageBucket#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_storage_bucket#id DataGoogleStorageBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_storage_bucket#project DataGoogleStorageBucket#project}

---

### DataGoogleStorageBucketCors <a name="DataGoogleStorageBucketCors" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCors.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketCors: dataGoogleStorageBucket.DataGoogleStorageBucketCors = { ... }
```


### DataGoogleStorageBucketCustomPlacementConfig <a name="DataGoogleStorageBucketCustomPlacementConfig" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfig.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketCustomPlacementConfig: dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfig = { ... }
```


### DataGoogleStorageBucketEncryption <a name="DataGoogleStorageBucketEncryption" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryption.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketEncryption: dataGoogleStorageBucket.DataGoogleStorageBucketEncryption = { ... }
```


### DataGoogleStorageBucketHierarchicalNamespace <a name="DataGoogleStorageBucketHierarchicalNamespace" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespace.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketHierarchicalNamespace: dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespace = { ... }
```


### DataGoogleStorageBucketIpFilter <a name="DataGoogleStorageBucketIpFilter" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilter.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketIpFilter: dataGoogleStorageBucket.DataGoogleStorageBucketIpFilter = { ... }
```


### DataGoogleStorageBucketIpFilterPublicNetworkSource <a name="DataGoogleStorageBucketIpFilterPublicNetworkSource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSource.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketIpFilterPublicNetworkSource: dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSource = { ... }
```


### DataGoogleStorageBucketIpFilterVpcNetworkSources <a name="DataGoogleStorageBucketIpFilterVpcNetworkSources" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSources.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketIpFilterVpcNetworkSources: dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSources = { ... }
```


### DataGoogleStorageBucketLifecycleRule <a name="DataGoogleStorageBucketLifecycleRule" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRule.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketLifecycleRule: dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRule = { ... }
```


### DataGoogleStorageBucketLifecycleRuleAction <a name="DataGoogleStorageBucketLifecycleRuleAction" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleAction.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketLifecycleRuleAction: dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleAction = { ... }
```


### DataGoogleStorageBucketLifecycleRuleCondition <a name="DataGoogleStorageBucketLifecycleRuleCondition" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleCondition.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketLifecycleRuleCondition: dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleCondition = { ... }
```


### DataGoogleStorageBucketLogging <a name="DataGoogleStorageBucketLogging" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLogging.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketLogging: dataGoogleStorageBucket.DataGoogleStorageBucketLogging = { ... }
```


### DataGoogleStorageBucketRetentionPolicy <a name="DataGoogleStorageBucketRetentionPolicy" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicy.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketRetentionPolicy: dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicy = { ... }
```


### DataGoogleStorageBucketSoftDeletePolicy <a name="DataGoogleStorageBucketSoftDeletePolicy" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicy.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketSoftDeletePolicy: dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicy = { ... }
```


### DataGoogleStorageBucketVersioning <a name="DataGoogleStorageBucketVersioning" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioning.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketVersioning: dataGoogleStorageBucket.DataGoogleStorageBucketVersioning = { ... }
```


### DataGoogleStorageBucketWebsite <a name="DataGoogleStorageBucketWebsite" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsite.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

const dataGoogleStorageBucketWebsite: dataGoogleStorageBucket.DataGoogleStorageBucketWebsite = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageBucketAutoclassList <a name="DataGoogleStorageBucketAutoclassList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketAutoclassOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketAutoclassOutputReference <a name="DataGoogleStorageBucketAutoclassOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.terminalStorageClass">terminalStorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclass">DataGoogleStorageBucketAutoclass</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `terminalStorageClass`<sup>Required</sup> <a name="terminalStorageClass" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.terminalStorageClass"></a>

```typescript
public readonly terminalStorageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclassOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketAutoclass;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketAutoclass">DataGoogleStorageBucketAutoclass</a>

---


### DataGoogleStorageBucketCorsList <a name="DataGoogleStorageBucketCorsList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketCorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketCorsOutputReference <a name="DataGoogleStorageBucketCorsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.method">method</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.origin">origin</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.responseHeader">responseHeader</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCors">DataGoogleStorageBucketCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.maxAgeSeconds"></a>

```typescript
public readonly maxAgeSeconds: number;
```

- *Type:* number

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.method"></a>

```typescript
public readonly method: string[];
```

- *Type:* string[]

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.origin"></a>

```typescript
public readonly origin: string[];
```

- *Type:* string[]

---

##### `responseHeader`<sup>Required</sup> <a name="responseHeader" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.responseHeader"></a>

```typescript
public readonly responseHeader: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketCors;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCors">DataGoogleStorageBucketCors</a>

---


### DataGoogleStorageBucketCustomPlacementConfigList <a name="DataGoogleStorageBucketCustomPlacementConfigList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketCustomPlacementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketCustomPlacementConfigOutputReference <a name="DataGoogleStorageBucketCustomPlacementConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocations">dataLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfig">DataGoogleStorageBucketCustomPlacementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLocations`<sup>Required</sup> <a name="dataLocations" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.dataLocations"></a>

```typescript
public readonly dataLocations: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketCustomPlacementConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketCustomPlacementConfig">DataGoogleStorageBucketCustomPlacementConfig</a>

---


### DataGoogleStorageBucketEncryptionList <a name="DataGoogleStorageBucketEncryptionList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketEncryptionOutputReference <a name="DataGoogleStorageBucketEncryptionOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyName">defaultKmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryption">DataGoogleStorageBucketEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultKmsKeyName`<sup>Required</sup> <a name="defaultKmsKeyName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.defaultKmsKeyName"></a>

```typescript
public readonly defaultKmsKeyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketEncryption;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketEncryption">DataGoogleStorageBucketEncryption</a>

---


### DataGoogleStorageBucketHierarchicalNamespaceList <a name="DataGoogleStorageBucketHierarchicalNamespaceList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketHierarchicalNamespaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketHierarchicalNamespaceOutputReference <a name="DataGoogleStorageBucketHierarchicalNamespaceOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespace">DataGoogleStorageBucketHierarchicalNamespace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketHierarchicalNamespace;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketHierarchicalNamespace">DataGoogleStorageBucketHierarchicalNamespace</a>

---


### DataGoogleStorageBucketIpFilterList <a name="DataGoogleStorageBucketIpFilterList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketIpFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketIpFilterOutputReference <a name="DataGoogleStorageBucketIpFilterOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.property.publicNetworkSource">publicNetworkSource</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList">DataGoogleStorageBucketIpFilterPublicNetworkSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.property.vpcNetworkSources">vpcNetworkSources</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList">DataGoogleStorageBucketIpFilterVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilter">DataGoogleStorageBucketIpFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `publicNetworkSource`<sup>Required</sup> <a name="publicNetworkSource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.property.publicNetworkSource"></a>

```typescript
public readonly publicNetworkSource: DataGoogleStorageBucketIpFilterPublicNetworkSourceList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList">DataGoogleStorageBucketIpFilterPublicNetworkSourceList</a>

---

##### `vpcNetworkSources`<sup>Required</sup> <a name="vpcNetworkSources" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.property.vpcNetworkSources"></a>

```typescript
public readonly vpcNetworkSources: DataGoogleStorageBucketIpFilterVpcNetworkSourcesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList">DataGoogleStorageBucketIpFilterVpcNetworkSourcesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketIpFilter;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilter">DataGoogleStorageBucketIpFilter</a>

---


### DataGoogleStorageBucketIpFilterPublicNetworkSourceList <a name="DataGoogleStorageBucketIpFilterPublicNetworkSourceList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference <a name="DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.property.allowedIpCidrRanges">allowedIpCidrRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSource">DataGoogleStorageBucketIpFilterPublicNetworkSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedIpCidrRanges`<sup>Required</sup> <a name="allowedIpCidrRanges" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.property.allowedIpCidrRanges"></a>

```typescript
public readonly allowedIpCidrRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketIpFilterPublicNetworkSource;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterPublicNetworkSource">DataGoogleStorageBucketIpFilterPublicNetworkSource</a>

---


### DataGoogleStorageBucketIpFilterVpcNetworkSourcesList <a name="DataGoogleStorageBucketIpFilterVpcNetworkSourcesList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference <a name="DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.property.allowedIpCidrRanges">allowedIpCidrRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSources">DataGoogleStorageBucketIpFilterVpcNetworkSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedIpCidrRanges`<sup>Required</sup> <a name="allowedIpCidrRanges" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.property.allowedIpCidrRanges"></a>

```typescript
public readonly allowedIpCidrRanges: string[];
```

- *Type:* string[]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketIpFilterVpcNetworkSources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketIpFilterVpcNetworkSources">DataGoogleStorageBucketIpFilterVpcNetworkSources</a>

---


### DataGoogleStorageBucketLifecycleRuleActionList <a name="DataGoogleStorageBucketLifecycleRuleActionList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketLifecycleRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketLifecycleRuleActionOutputReference <a name="DataGoogleStorageBucketLifecycleRuleActionOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleAction">DataGoogleStorageBucketLifecycleRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketLifecycleRuleAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleAction">DataGoogleStorageBucketLifecycleRuleAction</a>

---


### DataGoogleStorageBucketLifecycleRuleConditionList <a name="DataGoogleStorageBucketLifecycleRuleConditionList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketLifecycleRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketLifecycleRuleConditionOutputReference <a name="DataGoogleStorageBucketLifecycleRuleConditionOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.age">age</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBefore">createdBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore">customTimeBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime">daysSinceCustomTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime">daysSinceNoncurrentTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix">matchesPrefix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass">matchesStorageClass</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix">matchesSuffix</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore">noncurrentTimeBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions">numNewerVersions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero">sendAgeIfZero</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero">sendDaysSinceCustomTimeIfZero</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero">sendDaysSinceNoncurrentTimeIfZero</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero">sendNumNewerVersionsIfZero</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.withState">withState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleCondition">DataGoogleStorageBucketLifecycleRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `age`<sup>Required</sup> <a name="age" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.age"></a>

```typescript
public readonly age: number;
```

- *Type:* number

---

##### `createdBefore`<sup>Required</sup> <a name="createdBefore" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.createdBefore"></a>

```typescript
public readonly createdBefore: string;
```

- *Type:* string

---

##### `customTimeBefore`<sup>Required</sup> <a name="customTimeBefore" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.customTimeBefore"></a>

```typescript
public readonly customTimeBefore: string;
```

- *Type:* string

---

##### `daysSinceCustomTime`<sup>Required</sup> <a name="daysSinceCustomTime" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceCustomTime"></a>

```typescript
public readonly daysSinceCustomTime: number;
```

- *Type:* number

---

##### `daysSinceNoncurrentTime`<sup>Required</sup> <a name="daysSinceNoncurrentTime" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.daysSinceNoncurrentTime"></a>

```typescript
public readonly daysSinceNoncurrentTime: number;
```

- *Type:* number

---

##### `matchesPrefix`<sup>Required</sup> <a name="matchesPrefix" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesPrefix"></a>

```typescript
public readonly matchesPrefix: string[];
```

- *Type:* string[]

---

##### `matchesStorageClass`<sup>Required</sup> <a name="matchesStorageClass" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesStorageClass"></a>

```typescript
public readonly matchesStorageClass: string[];
```

- *Type:* string[]

---

##### `matchesSuffix`<sup>Required</sup> <a name="matchesSuffix" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.matchesSuffix"></a>

```typescript
public readonly matchesSuffix: string[];
```

- *Type:* string[]

---

##### `noncurrentTimeBefore`<sup>Required</sup> <a name="noncurrentTimeBefore" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.noncurrentTimeBefore"></a>

```typescript
public readonly noncurrentTimeBefore: string;
```

- *Type:* string

---

##### `numNewerVersions`<sup>Required</sup> <a name="numNewerVersions" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.numNewerVersions"></a>

```typescript
public readonly numNewerVersions: number;
```

- *Type:* number

---

##### `sendAgeIfZero`<sup>Required</sup> <a name="sendAgeIfZero" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendAgeIfZero"></a>

```typescript
public readonly sendAgeIfZero: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sendDaysSinceCustomTimeIfZero`<sup>Required</sup> <a name="sendDaysSinceCustomTimeIfZero" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceCustomTimeIfZero"></a>

```typescript
public readonly sendDaysSinceCustomTimeIfZero: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sendDaysSinceNoncurrentTimeIfZero`<sup>Required</sup> <a name="sendDaysSinceNoncurrentTimeIfZero" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendDaysSinceNoncurrentTimeIfZero"></a>

```typescript
public readonly sendDaysSinceNoncurrentTimeIfZero: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `sendNumNewerVersionsIfZero`<sup>Required</sup> <a name="sendNumNewerVersionsIfZero" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.sendNumNewerVersionsIfZero"></a>

```typescript
public readonly sendNumNewerVersionsIfZero: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `withState`<sup>Required</sup> <a name="withState" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.withState"></a>

```typescript
public readonly withState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketLifecycleRuleCondition;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleCondition">DataGoogleStorageBucketLifecycleRuleCondition</a>

---


### DataGoogleStorageBucketLifecycleRuleList <a name="DataGoogleStorageBucketLifecycleRuleList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketLifecycleRuleOutputReference <a name="DataGoogleStorageBucketLifecycleRuleOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList">DataGoogleStorageBucketLifecycleRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList">DataGoogleStorageBucketLifecycleRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRule">DataGoogleStorageBucketLifecycleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.action"></a>

```typescript
public readonly action: DataGoogleStorageBucketLifecycleRuleActionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleActionList">DataGoogleStorageBucketLifecycleRuleActionList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.condition"></a>

```typescript
public readonly condition: DataGoogleStorageBucketLifecycleRuleConditionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleConditionList">DataGoogleStorageBucketLifecycleRuleConditionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketLifecycleRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLifecycleRule">DataGoogleStorageBucketLifecycleRule</a>

---


### DataGoogleStorageBucketLoggingList <a name="DataGoogleStorageBucketLoggingList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketLoggingOutputReference <a name="DataGoogleStorageBucketLoggingOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.logBucket">logBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.logObjectPrefix">logObjectPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLogging">DataGoogleStorageBucketLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.logBucket"></a>

```typescript
public readonly logBucket: string;
```

- *Type:* string

---

##### `logObjectPrefix`<sup>Required</sup> <a name="logObjectPrefix" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.logObjectPrefix"></a>

```typescript
public readonly logObjectPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketLogging;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketLogging">DataGoogleStorageBucketLogging</a>

---


### DataGoogleStorageBucketRetentionPolicyList <a name="DataGoogleStorageBucketRetentionPolicyList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketRetentionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketRetentionPolicyOutputReference <a name="DataGoogleStorageBucketRetentionPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.isLocked">isLocked</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicy">DataGoogleStorageBucketRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isLocked`<sup>Required</sup> <a name="isLocked" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.isLocked"></a>

```typescript
public readonly isLocked: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketRetentionPolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketRetentionPolicy">DataGoogleStorageBucketRetentionPolicy</a>

---


### DataGoogleStorageBucketSoftDeletePolicyList <a name="DataGoogleStorageBucketSoftDeletePolicyList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketSoftDeletePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketSoftDeletePolicyOutputReference <a name="DataGoogleStorageBucketSoftDeletePolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.property.effectiveTime">effectiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds">retentionDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicy">DataGoogleStorageBucketSoftDeletePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.property.effectiveTime"></a>

```typescript
public readonly effectiveTime: string;
```

- *Type:* string

---

##### `retentionDurationSeconds`<sup>Required</sup> <a name="retentionDurationSeconds" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.property.retentionDurationSeconds"></a>

```typescript
public readonly retentionDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketSoftDeletePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketSoftDeletePolicy">DataGoogleStorageBucketSoftDeletePolicy</a>

---


### DataGoogleStorageBucketVersioningList <a name="DataGoogleStorageBucketVersioningList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketVersioningOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketVersioningOutputReference <a name="DataGoogleStorageBucketVersioningOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioning">DataGoogleStorageBucketVersioning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketVersioning;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketVersioning">DataGoogleStorageBucketVersioning</a>

---


### DataGoogleStorageBucketWebsiteList <a name="DataGoogleStorageBucketWebsiteList" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.get"></a>

```typescript
public get(index: number): DataGoogleStorageBucketWebsiteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleStorageBucketWebsiteOutputReference <a name="DataGoogleStorageBucketWebsiteOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer"></a>

```typescript
import { dataGoogleStorageBucket } from '@cdktf/provider-google-beta'

new dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.mainPageSuffix">mainPageSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.notFoundPage">notFoundPage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsite">DataGoogleStorageBucketWebsite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mainPageSuffix`<sup>Required</sup> <a name="mainPageSuffix" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.mainPageSuffix"></a>

```typescript
public readonly mainPageSuffix: string;
```

- *Type:* string

---

##### `notFoundPage`<sup>Required</sup> <a name="notFoundPage" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.notFoundPage"></a>

```typescript
public readonly notFoundPage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleStorageBucketWebsite;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageBucket.DataGoogleStorageBucketWebsite">DataGoogleStorageBucketWebsite</a>

---



