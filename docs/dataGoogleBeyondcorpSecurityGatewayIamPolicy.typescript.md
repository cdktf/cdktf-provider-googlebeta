# `dataGoogleBeyondcorpSecurityGatewayIamPolicy` Submodule <a name="`dataGoogleBeyondcorpSecurityGatewayIamPolicy` Submodule" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpSecurityGatewayIamPolicy <a name="DataGoogleBeyondcorpSecurityGatewayIamPolicy" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/data-sources/google_beyondcorp_security_gateway_iam_policy google_beyondcorp_security_gateway_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGatewayIamPolicy } from '@cdktf/provider-google-beta'

new dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy(scope: Construct, id: string, config: DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig">DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig">DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBeyondcorpSecurityGatewayIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGatewayIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGatewayIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGatewayIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGatewayIamPolicy } from '@cdktf/provider-google-beta'

dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleBeyondcorpSecurityGatewayIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBeyondcorpSecurityGatewayIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBeyondcorpSecurityGatewayIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/data-sources/google_beyondcorp_security_gateway_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBeyondcorpSecurityGatewayIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.securityGatewayIdInput">securityGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.securityGatewayId">securityGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `securityGatewayIdInput`<sup>Optional</sup> <a name="securityGatewayIdInput" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.securityGatewayIdInput"></a>

```typescript
public readonly securityGatewayIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.securityGatewayId"></a>

```typescript
public readonly securityGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig <a name="DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleBeyondcorpSecurityGatewayIamPolicy } from '@cdktf/provider-google-beta'

const dataGoogleBeyondcorpSecurityGatewayIamPolicyConfig: dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.securityGatewayId">securityGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/data-sources/google_beyondcorp_security_gateway_iam_policy#security_gateway_id DataGoogleBeyondcorpSecurityGatewayIamPolicy#security_gateway_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/data-sources/google_beyondcorp_security_gateway_iam_policy#id DataGoogleBeyondcorpSecurityGatewayIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/data-sources/google_beyondcorp_security_gateway_iam_policy#location DataGoogleBeyondcorpSecurityGatewayIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/data-sources/google_beyondcorp_security_gateway_iam_policy#project DataGoogleBeyondcorpSecurityGatewayIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.securityGatewayId"></a>

```typescript
public readonly securityGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/data-sources/google_beyondcorp_security_gateway_iam_policy#security_gateway_id DataGoogleBeyondcorpSecurityGatewayIamPolicy#security_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/data-sources/google_beyondcorp_security_gateway_iam_policy#id DataGoogleBeyondcorpSecurityGatewayIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/data-sources/google_beyondcorp_security_gateway_iam_policy#location DataGoogleBeyondcorpSecurityGatewayIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleBeyondcorpSecurityGatewayIamPolicy.DataGoogleBeyondcorpSecurityGatewayIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.36.1/docs/data-sources/google_beyondcorp_security_gateway_iam_policy#project DataGoogleBeyondcorpSecurityGatewayIamPolicy#project}.

---



