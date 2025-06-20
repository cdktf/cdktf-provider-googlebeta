# `dataGoogleApiGatewayGatewayIamPolicy` Submodule <a name="`dataGoogleApiGatewayGatewayIamPolicy` Submodule" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApiGatewayGatewayIamPolicy <a name="DataGoogleApiGatewayGatewayIamPolicy" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_api_gateway_gateway_iam_policy google_api_gateway_gateway_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.Initializer"></a>

```typescript
import { dataGoogleApiGatewayGatewayIamPolicy } from '@cdktf/provider-google-beta'

new dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy(scope: Construct, id: string, config: DataGoogleApiGatewayGatewayIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig">DataGoogleApiGatewayGatewayIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig">DataGoogleApiGatewayGatewayIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleApiGatewayGatewayIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleApiGatewayGatewayIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleApiGatewayGatewayIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleApiGatewayGatewayIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleApiGatewayGatewayIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleApiGatewayGatewayIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleApiGatewayGatewayIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleApiGatewayGatewayIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_api_gateway_gateway_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleApiGatewayGatewayIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApiGatewayGatewayIamPolicyConfig <a name="DataGoogleApiGatewayGatewayIamPolicyConfig" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleApiGatewayGatewayIamPolicy } from '@cdktf/provider-google-beta'

const dataGoogleApiGatewayGatewayIamPolicyConfig: dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.gateway">gateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_api_gateway_gateway_iam_policy#gateway DataGoogleApiGatewayGatewayIamPolicy#gateway}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_api_gateway_gateway_iam_policy#id DataGoogleApiGatewayGatewayIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_api_gateway_gateway_iam_policy#project DataGoogleApiGatewayGatewayIamPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_api_gateway_gateway_iam_policy#region DataGoogleApiGatewayGatewayIamPolicy#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_api_gateway_gateway_iam_policy#gateway DataGoogleApiGatewayGatewayIamPolicy#gateway}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_api_gateway_gateway_iam_policy#id DataGoogleApiGatewayGatewayIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_api_gateway_gateway_iam_policy#project DataGoogleApiGatewayGatewayIamPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleApiGatewayGatewayIamPolicy.DataGoogleApiGatewayGatewayIamPolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/data-sources/google_api_gateway_gateway_iam_policy#region DataGoogleApiGatewayGatewayIamPolicy#region}.

---



