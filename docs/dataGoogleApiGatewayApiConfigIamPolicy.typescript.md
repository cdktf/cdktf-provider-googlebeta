# `dataGoogleApiGatewayApiConfigIamPolicy` Submodule <a name="`dataGoogleApiGatewayApiConfigIamPolicy` Submodule" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApiGatewayApiConfigIamPolicy <a name="DataGoogleApiGatewayApiConfigIamPolicy" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_api_gateway_api_config_iam_policy google_api_gateway_api_config_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer"></a>

```typescript
import { dataGoogleApiGatewayApiConfigIamPolicy } from '@cdktf/provider-google-beta'

new dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy(scope: Construct, id: string, config: DataGoogleApiGatewayApiConfigIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig">DataGoogleApiGatewayApiConfigIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig">DataGoogleApiGatewayApiConfigIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleApiGatewayApiConfigIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleApiGatewayApiConfigIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleApiGatewayApiConfigIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleApiGatewayApiConfigIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleApiGatewayApiConfigIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleApiGatewayApiConfigIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleApiGatewayApiConfigIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleApiGatewayApiConfigIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_api_gateway_api_config_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleApiGatewayApiConfigIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.apiConfigInput">apiConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.apiInput">apiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.api">api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.apiConfig">apiConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `apiConfigInput`<sup>Optional</sup> <a name="apiConfigInput" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.apiConfigInput"></a>

```typescript
public readonly apiConfigInput: string;
```

- *Type:* string

---

##### `apiInput`<sup>Optional</sup> <a name="apiInput" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.apiInput"></a>

```typescript
public readonly apiInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

---

##### `apiConfig`<sup>Required</sup> <a name="apiConfig" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.apiConfig"></a>

```typescript
public readonly apiConfig: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApiGatewayApiConfigIamPolicyConfig <a name="DataGoogleApiGatewayApiConfigIamPolicyConfig" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleApiGatewayApiConfigIamPolicy } from '@cdktf/provider-google-beta'

const dataGoogleApiGatewayApiConfigIamPolicyConfig: dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.api">api</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_api_gateway_api_config_iam_policy#api DataGoogleApiGatewayApiConfigIamPolicy#api}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.apiConfig">apiConfig</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_api_gateway_api_config_iam_policy#api_config DataGoogleApiGatewayApiConfigIamPolicy#api_config}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_api_gateway_api_config_iam_policy#id DataGoogleApiGatewayApiConfigIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_api_gateway_api_config_iam_policy#project DataGoogleApiGatewayApiConfigIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.api"></a>

```typescript
public readonly api: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_api_gateway_api_config_iam_policy#api DataGoogleApiGatewayApiConfigIamPolicy#api}.

---

##### `apiConfig`<sup>Required</sup> <a name="apiConfig" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.apiConfig"></a>

```typescript
public readonly apiConfig: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_api_gateway_api_config_iam_policy#api_config DataGoogleApiGatewayApiConfigIamPolicy#api_config}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_api_gateway_api_config_iam_policy#id DataGoogleApiGatewayApiConfigIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_api_gateway_api_config_iam_policy#project DataGoogleApiGatewayApiConfigIamPolicy#project}.

---



