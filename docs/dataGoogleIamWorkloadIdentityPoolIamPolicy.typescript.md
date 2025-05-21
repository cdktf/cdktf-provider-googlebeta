# `dataGoogleIamWorkloadIdentityPoolIamPolicy` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolIamPolicy` Submodule" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolIamPolicy <a name="DataGoogleIamWorkloadIdentityPoolIamPolicy" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/data-sources/google_iam_workload_identity_pool_iam_policy google_iam_workload_identity_pool_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolIamPolicy } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy(scope: Construct, id: string, config: DataGoogleIamWorkloadIdentityPoolIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig">DataGoogleIamWorkloadIdentityPoolIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig">DataGoogleIamWorkloadIdentityPoolIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleIamWorkloadIdentityPoolIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleIamWorkloadIdentityPoolIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleIamWorkloadIdentityPoolIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleIamWorkloadIdentityPoolIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/data-sources/google_iam_workload_identity_pool_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleIamWorkloadIdentityPoolIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.workloadIdentityPoolIdInput"></a>

```typescript
public readonly workloadIdentityPoolIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolIamPolicyConfig <a name="DataGoogleIamWorkloadIdentityPoolIamPolicyConfig" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolIamPolicy } from '@cdktf/provider-google-beta'

const dataGoogleIamWorkloadIdentityPoolIamPolicyConfig: dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/data-sources/google_iam_workload_identity_pool_iam_policy#workload_identity_pool_id DataGoogleIamWorkloadIdentityPoolIamPolicy#workload_identity_pool_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/data-sources/google_iam_workload_identity_pool_iam_policy#id DataGoogleIamWorkloadIdentityPoolIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/data-sources/google_iam_workload_identity_pool_iam_policy#project DataGoogleIamWorkloadIdentityPoolIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/data-sources/google_iam_workload_identity_pool_iam_policy#workload_identity_pool_id DataGoogleIamWorkloadIdentityPoolIamPolicy#workload_identity_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/data-sources/google_iam_workload_identity_pool_iam_policy#id DataGoogleIamWorkloadIdentityPoolIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolIamPolicy.DataGoogleIamWorkloadIdentityPoolIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.0/docs/data-sources/google_iam_workload_identity_pool_iam_policy#project DataGoogleIamWorkloadIdentityPoolIamPolicy#project}.

---



