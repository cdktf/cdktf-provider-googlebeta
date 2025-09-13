# `dataGoogleVertexAiFeatureOnlineStoreIamPolicy` Submodule <a name="`dataGoogleVertexAiFeatureOnlineStoreIamPolicy` Submodule" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVertexAiFeatureOnlineStoreIamPolicy <a name="DataGoogleVertexAiFeatureOnlineStoreIamPolicy" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_vertex_ai_feature_online_store_iam_policy google_vertex_ai_feature_online_store_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer"></a>

```typescript
import { dataGoogleVertexAiFeatureOnlineStoreIamPolicy } from '@cdktf/provider-google-beta'

new dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy(scope: Construct, id: string, config: DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig">DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig">DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVertexAiFeatureOnlineStoreIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleVertexAiFeatureOnlineStoreIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleVertexAiFeatureOnlineStoreIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleVertexAiFeatureOnlineStoreIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleVertexAiFeatureOnlineStoreIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleVertexAiFeatureOnlineStoreIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVertexAiFeatureOnlineStoreIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVertexAiFeatureOnlineStoreIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_vertex_ai_feature_online_store_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVertexAiFeatureOnlineStoreIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.featureOnlineStoreInput">featureOnlineStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.featureOnlineStore">featureOnlineStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `featureOnlineStoreInput`<sup>Optional</sup> <a name="featureOnlineStoreInput" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.featureOnlineStoreInput"></a>

```typescript
public readonly featureOnlineStoreInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `featureOnlineStore`<sup>Required</sup> <a name="featureOnlineStore" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.featureOnlineStore"></a>

```typescript
public readonly featureOnlineStore: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig <a name="DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleVertexAiFeatureOnlineStoreIamPolicy } from '@cdktf/provider-google-beta'

const dataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig: dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.featureOnlineStore">featureOnlineStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_vertex_ai_feature_online_store_iam_policy#feature_online_store DataGoogleVertexAiFeatureOnlineStoreIamPolicy#feature_online_store}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_vertex_ai_feature_online_store_iam_policy#id DataGoogleVertexAiFeatureOnlineStoreIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_vertex_ai_feature_online_store_iam_policy#project DataGoogleVertexAiFeatureOnlineStoreIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_vertex_ai_feature_online_store_iam_policy#region DataGoogleVertexAiFeatureOnlineStoreIamPolicy#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `featureOnlineStore`<sup>Required</sup> <a name="featureOnlineStore" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.featureOnlineStore"></a>

```typescript
public readonly featureOnlineStore: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_vertex_ai_feature_online_store_iam_policy#feature_online_store DataGoogleVertexAiFeatureOnlineStoreIamPolicy#feature_online_store}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_vertex_ai_feature_online_store_iam_policy#id DataGoogleVertexAiFeatureOnlineStoreIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_vertex_ai_feature_online_store_iam_policy#project DataGoogleVertexAiFeatureOnlineStoreIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleVertexAiFeatureOnlineStoreIamPolicy.DataGoogleVertexAiFeatureOnlineStoreIamPolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.3/docs/data-sources/google_vertex_ai_feature_online_store_iam_policy#region DataGoogleVertexAiFeatureOnlineStoreIamPolicy#region}.

---



