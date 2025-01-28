# `dataGoogleComputeSecurityPolicy` Submodule <a name="`dataGoogleComputeSecurityPolicy` Submodule" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeSecurityPolicy <a name="DataGoogleComputeSecurityPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/data-sources/google_compute_security_policy google_compute_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy(scope: Construct, id: string, config?: DataGoogleComputeSecurityPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig">DataGoogleComputeSecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig">DataGoogleComputeSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetSelfLink">resetSelfLink</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSelfLink` <a name="resetSelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.resetSelfLink"></a>

```typescript
public resetSelfLink(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isConstruct"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleComputeSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/data-sources/google_compute_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.adaptiveProtectionConfig">adaptiveProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.advancedOptionsConfig">advancedOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.recaptchaOptionsConfig">recaptchaOptionsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList">DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList">DataGoogleComputeSecurityPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.selfLinkInput">selfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `adaptiveProtectionConfig`<sup>Required</sup> <a name="adaptiveProtectionConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.adaptiveProtectionConfig"></a>

```typescript
public readonly adaptiveProtectionConfig: DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList</a>

---

##### `advancedOptionsConfig`<sup>Required</sup> <a name="advancedOptionsConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.advancedOptionsConfig"></a>

```typescript
public readonly advancedOptionsConfig: DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `recaptchaOptionsConfig`<sup>Required</sup> <a name="recaptchaOptionsConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.recaptchaOptionsConfig"></a>

```typescript
public readonly recaptchaOptionsConfig: DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList">DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.rule"></a>

```typescript
public readonly rule: DataGoogleComputeSecurityPolicyRuleList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList">DataGoogleComputeSecurityPolicyRuleList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `selfLinkInput`<sup>Optional</sup> <a name="selfLinkInput" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.selfLinkInput"></a>

```typescript
public readonly selfLinkInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyAdaptiveProtectionConfig: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig = { ... }
```


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig = { ... }
```


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig = { ... }
```


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs = { ... }
```


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs = { ... }
```


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfig <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyAdvancedOptionsConfig: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig = { ... }
```


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig = { ... }
```


### DataGoogleComputeSecurityPolicyConfig <a name="DataGoogleComputeSecurityPolicyConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyConfig: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/data-sources/google_compute_security_policy#id DataGoogleComputeSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.name">name</a></code> | <code>string</code> | The name of the security policy. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.project">project</a></code> | <code>string</code> | The project in which the resource belongs. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.selfLink">selfLink</a></code> | <code>string</code> | The URI of the created resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/data-sources/google_compute_security_policy#id DataGoogleComputeSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/data-sources/google_compute_security_policy#name DataGoogleComputeSecurityPolicy#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project in which the resource belongs. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/data-sources/google_compute_security_policy#project DataGoogleComputeSecurityPolicy#project}

---

##### `selfLink`<sup>Optional</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyConfig.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

The URI of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/data-sources/google_compute_security_policy#self_link DataGoogleComputeSecurityPolicy#self_link}

---

### DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig <a name="DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRecaptchaOptionsConfig: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig = { ... }
```


### DataGoogleComputeSecurityPolicyRule <a name="DataGoogleComputeSecurityPolicyRule" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRule: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule = { ... }
```


### DataGoogleComputeSecurityPolicyRuleHeaderAction <a name="DataGoogleComputeSecurityPolicyRuleHeaderAction" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleHeaderAction: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction = { ... }
```


### DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds = { ... }
```


### DataGoogleComputeSecurityPolicyRuleMatch <a name="DataGoogleComputeSecurityPolicyRuleMatch" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleMatch: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch = { ... }
```


### DataGoogleComputeSecurityPolicyRuleMatchConfig <a name="DataGoogleComputeSecurityPolicyRuleMatchConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleMatchConfig: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig = { ... }
```


### DataGoogleComputeSecurityPolicyRuleMatchExpr <a name="DataGoogleComputeSecurityPolicyRuleMatchExpr" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleMatchExpr: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr = { ... }
```


### DataGoogleComputeSecurityPolicyRuleMatchExprOptions <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptions" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleMatchExprOptions: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions = { ... }
```


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions = { ... }
```


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig = { ... }
```


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion = { ... }
```


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie = { ... }
```


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader = { ... }
```


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam = { ... }
```


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri = { ... }
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptions <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptions" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleRateLimitOptions: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions = { ... }
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold = { ... }
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs = { ... }
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions = { ... }
```


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold = { ... }
```


### DataGoogleComputeSecurityPolicyRuleRedirectOptions <a name="DataGoogleComputeSecurityPolicyRuleRedirectOptions" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

const dataGoogleComputeSecurityPolicyRuleRedirectOptions: dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.confidenceThreshold">confidenceThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.expirationSec">expirationSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.impactedBaselineThreshold">impactedBaselineThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.loadThreshold">loadThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: number;
```

- *Type:* number

---

##### `expirationSec`<sup>Required</sup> <a name="expirationSec" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.expirationSec"></a>

```typescript
public readonly expirationSec: number;
```

- *Type:* number

---

##### `impactedBaselineThreshold`<sup>Required</sup> <a name="impactedBaselineThreshold" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.impactedBaselineThreshold"></a>

```typescript
public readonly impactedBaselineThreshold: number;
```

- *Type:* number

---

##### `loadThreshold`<sup>Required</sup> <a name="loadThreshold" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.loadThreshold"></a>

```typescript
public readonly loadThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfig</a>

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enable">enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibility">ruleVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.thresholdConfigs">thresholdConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.enable"></a>

```typescript
public readonly enable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ruleVisibility`<sup>Required</sup> <a name="ruleVisibility" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.ruleVisibility"></a>

```typescript
public readonly ruleVisibility: string;
```

- *Type:* string

---

##### `thresholdConfigs`<sup>Required</sup> <a name="thresholdConfigs" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.thresholdConfigs"></a>

```typescript
public readonly thresholdConfigs: DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig</a>

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployConfidenceThreshold">autoDeployConfidenceThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployExpirationSec">autoDeployExpirationSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployImpactedBaselineThreshold">autoDeployImpactedBaselineThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployLoadThreshold">autoDeployLoadThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionAbsoluteQps">detectionAbsoluteQps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionLoadThreshold">detectionLoadThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionRelativeToBaselineQps">detectionRelativeToBaselineQps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.trafficGranularityConfigs">trafficGranularityConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoDeployConfidenceThreshold`<sup>Required</sup> <a name="autoDeployConfidenceThreshold" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployConfidenceThreshold"></a>

```typescript
public readonly autoDeployConfidenceThreshold: number;
```

- *Type:* number

---

##### `autoDeployExpirationSec`<sup>Required</sup> <a name="autoDeployExpirationSec" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployExpirationSec"></a>

```typescript
public readonly autoDeployExpirationSec: number;
```

- *Type:* number

---

##### `autoDeployImpactedBaselineThreshold`<sup>Required</sup> <a name="autoDeployImpactedBaselineThreshold" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployImpactedBaselineThreshold"></a>

```typescript
public readonly autoDeployImpactedBaselineThreshold: number;
```

- *Type:* number

---

##### `autoDeployLoadThreshold`<sup>Required</sup> <a name="autoDeployLoadThreshold" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.autoDeployLoadThreshold"></a>

```typescript
public readonly autoDeployLoadThreshold: number;
```

- *Type:* number

---

##### `detectionAbsoluteQps`<sup>Required</sup> <a name="detectionAbsoluteQps" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionAbsoluteQps"></a>

```typescript
public readonly detectionAbsoluteQps: number;
```

- *Type:* number

---

##### `detectionLoadThreshold`<sup>Required</sup> <a name="detectionLoadThreshold" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionLoadThreshold"></a>

```typescript
public readonly detectionLoadThreshold: number;
```

- *Type:* number

---

##### `detectionRelativeToBaselineQps`<sup>Required</sup> <a name="detectionRelativeToBaselineQps" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.detectionRelativeToBaselineQps"></a>

```typescript
public readonly detectionRelativeToBaselineQps: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `trafficGranularityConfigs`<sup>Required</sup> <a name="trafficGranularityConfigs" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.trafficGranularityConfigs"></a>

```typescript
public readonly trafficGranularityConfigs: DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigs</a>

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.enableEachUniqueValue">enableEachUniqueValue</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableEachUniqueValue`<sup>Required</sup> <a name="enableEachUniqueValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.enableEachUniqueValue"></a>

```typescript
public readonly enableEachUniqueValue: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigThresholdConfigsTrafficGranularityConfigs</a>

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.autoDeployConfig">autoDeployConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfig">layer7DdosDefenseConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoDeployConfig`<sup>Required</sup> <a name="autoDeployConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.autoDeployConfig"></a>

```typescript
public readonly autoDeployConfig: DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigAutoDeployConfigList</a>

---

##### `layer7DdosDefenseConfig`<sup>Required</sup> <a name="layer7DdosDefenseConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.layer7DdosDefenseConfig"></a>

```typescript
public readonly layer7DdosDefenseConfig: DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig">DataGoogleComputeSecurityPolicyAdaptiveProtectionConfig</a>

---


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">contentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```typescript
public readonly contentTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference <a name="DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">jsonCustomConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">jsonParsing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">userIpRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig">DataGoogleComputeSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonCustomConfig`<sup>Required</sup> <a name="jsonCustomConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```typescript
public readonly jsonCustomConfig: DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList">DataGoogleComputeSecurityPolicyAdvancedOptionsConfigJsonCustomConfigList</a>

---

##### `jsonParsing`<sup>Required</sup> <a name="jsonParsing" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```typescript
public readonly jsonParsing: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `userIpRequestHeaders`<sup>Required</sup> <a name="userIpRequestHeaders" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```typescript
public readonly userIpRequestHeaders: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyAdvancedOptionsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyAdvancedOptionsConfig">DataGoogleComputeSecurityPolicyAdvancedOptionsConfig</a>

---


### DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList <a name="DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference <a name="DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKey">redirectSiteKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig">DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redirectSiteKey`<sup>Required</sup> <a name="redirectSiteKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.redirectSiteKey"></a>

```typescript
public readonly redirectSiteKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig">DataGoogleComputeSecurityPolicyRecaptchaOptionsConfig</a>

---


### DataGoogleComputeSecurityPolicyRuleHeaderActionList <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds">requestHeadersToAdds</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction">DataGoogleComputeSecurityPolicyRuleHeaderAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestHeadersToAdds`<sup>Required</sup> <a name="requestHeadersToAdds" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.requestHeadersToAdds"></a>

```typescript
public readonly requestHeadersToAdds: DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList">DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleHeaderAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderAction">DataGoogleComputeSecurityPolicyRuleHeaderAction</a>

---


### DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue">headerValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds">DataGoogleComputeSecurityPolicyRuleHeaderActionRequestHeadersToAdds</a>

---


### DataGoogleComputeSecurityPolicyRuleList <a name="DataGoogleComputeSecurityPolicyRuleList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleMatchConfigList <a name="DataGoogleComputeSecurityPolicyRuleMatchConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig">DataGoogleComputeSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleMatchConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfig">DataGoogleComputeSecurityPolicyRuleMatchConfig</a>

---


### DataGoogleComputeSecurityPolicyRuleMatchExprList <a name="DataGoogleComputeSecurityPolicyRuleMatchExprList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptions">recaptchaOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions">DataGoogleComputeSecurityPolicyRuleMatchExprOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recaptchaOptions`<sup>Required</sup> <a name="recaptchaOptions" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.recaptchaOptions"></a>

```typescript
public readonly recaptchaOptions: DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleMatchExprOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptions">DataGoogleComputeSecurityPolicyRuleMatchExprOptions</a>

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeys">actionTokenSiteKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeys">sessionTokenSiteKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTokenSiteKeys`<sup>Required</sup> <a name="actionTokenSiteKeys" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.actionTokenSiteKeys"></a>

```typescript
public readonly actionTokenSiteKeys: string[];
```

- *Type:* string[]

---

##### `sessionTokenSiteKeys`<sup>Required</sup> <a name="sessionTokenSiteKeys" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.sessionTokenSiteKeys"></a>

```typescript
public readonly sessionTokenSiteKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptions</a>

---


### DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr">DataGoogleComputeSecurityPolicyRuleMatchExpr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleMatchExpr;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExpr">DataGoogleComputeSecurityPolicyRuleMatchExpr</a>

---


### DataGoogleComputeSecurityPolicyRuleMatchList <a name="DataGoogleComputeSecurityPolicyRuleMatchList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleMatchOutputReference <a name="DataGoogleComputeSecurityPolicyRuleMatchOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList">DataGoogleComputeSecurityPolicyRuleMatchConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList">DataGoogleComputeSecurityPolicyRuleMatchExprList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.exprOptions">exprOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.versionedExpr">versionedExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch">DataGoogleComputeSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.config"></a>

```typescript
public readonly config: DataGoogleComputeSecurityPolicyRuleMatchConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchConfigList">DataGoogleComputeSecurityPolicyRuleMatchConfigList</a>

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.expr"></a>

```typescript
public readonly expr: DataGoogleComputeSecurityPolicyRuleMatchExprList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprList">DataGoogleComputeSecurityPolicyRuleMatchExprList</a>

---

##### `exprOptions`<sup>Required</sup> <a name="exprOptions" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.exprOptions"></a>

```typescript
public readonly exprOptions: DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList">DataGoogleComputeSecurityPolicyRuleMatchExprOptionsList</a>

---

##### `versionedExpr`<sup>Required</sup> <a name="versionedExpr" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```typescript
public readonly versionedExpr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatch">DataGoogleComputeSecurityPolicyRuleMatch</a>

---


### DataGoogleComputeSecurityPolicyRuleOutputReference <a name="DataGoogleComputeSecurityPolicyRuleOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.headerAction">headerAction</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList">DataGoogleComputeSecurityPolicyRuleHeaderActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList">DataGoogleComputeSecurityPolicyRuleMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.preconfiguredWafConfig">preconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.preview">preview</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.rateLimitOptions">rateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.redirectOptions">redirectOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList">DataGoogleComputeSecurityPolicyRuleRedirectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule">DataGoogleComputeSecurityPolicyRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `headerAction`<sup>Required</sup> <a name="headerAction" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.headerAction"></a>

```typescript
public readonly headerAction: DataGoogleComputeSecurityPolicyRuleHeaderActionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleHeaderActionList">DataGoogleComputeSecurityPolicyRuleHeaderActionList</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.match"></a>

```typescript
public readonly match: DataGoogleComputeSecurityPolicyRuleMatchList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleMatchList">DataGoogleComputeSecurityPolicyRuleMatchList</a>

---

##### `preconfiguredWafConfig`<sup>Required</sup> <a name="preconfiguredWafConfig" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.preconfiguredWafConfig"></a>

```typescript
public readonly preconfiguredWafConfig: DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList</a>

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.preview"></a>

```typescript
public readonly preview: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `rateLimitOptions`<sup>Required</sup> <a name="rateLimitOptions" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.rateLimitOptions"></a>

```typescript
public readonly rateLimitOptions: DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList</a>

---

##### `redirectOptions`<sup>Required</sup> <a name="redirectOptions" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.redirectOptions"></a>

```typescript
public readonly redirectOptions: DataGoogleComputeSecurityPolicyRuleRedirectOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList">DataGoogleComputeSecurityPolicyRuleRedirectOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRule;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRule">DataGoogleComputeSecurityPolicyRule</a>

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie">requestCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader">requestHeader</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">requestQueryParam</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri">requestUri</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">targetRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">targetRuleSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requestCookie`<sup>Required</sup> <a name="requestCookie" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```typescript
public readonly requestCookie: DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `requestHeader`<sup>Required</sup> <a name="requestHeader" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```typescript
public readonly requestHeader: DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `requestQueryParam`<sup>Required</sup> <a name="requestQueryParam" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```typescript
public readonly requestQueryParam: DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `requestUri`<sup>Required</sup> <a name="requestUri" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```typescript
public readonly requestUri: DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `targetRuleIds`<sup>Required</sup> <a name="targetRuleIds" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```typescript
public readonly targetRuleIds: string[];
```

- *Type:* string[]

---

##### `targetRuleSet`<sup>Required</sup> <a name="targetRuleSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```typescript
public readonly targetRuleSet: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusion</a>

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie</a>

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader</a>

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam</a>

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri</a>

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference <a name="DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion">exclusion</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusion`<sup>Required</sup> <a name="exclusion" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion"></a>

```typescript
public readonly exclusion: DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigExclusionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig">DataGoogleComputeSecurityPolicyRulePreconfiguredWafConfig</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec">intervalSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```typescript
public readonly intervalSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">enforceOnKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforceOnKeyName`<sup>Required</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```typescript
public readonly enforceOnKeyName: string;
```

- *Type:* string

---

##### `enforceOnKeyType`<sup>Required</sup> <a name="enforceOnKeyType" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```typescript
public readonly enforceOnKeyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptions</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec">banDurationSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold">banThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction">conformAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey">enforceOnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">enforceOnKeyConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName">enforceOnKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction">exceedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptions">exceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold">rateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions">DataGoogleComputeSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `banDurationSec`<sup>Required</sup> <a name="banDurationSec" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec"></a>

```typescript
public readonly banDurationSec: number;
```

- *Type:* number

---

##### `banThreshold`<sup>Required</sup> <a name="banThreshold" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold"></a>

```typescript
public readonly banThreshold: DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsBanThresholdList</a>

---

##### `conformAction`<sup>Required</sup> <a name="conformAction" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction"></a>

```typescript
public readonly conformAction: string;
```

- *Type:* string

---

##### `enforceOnKey`<sup>Required</sup> <a name="enforceOnKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```typescript
public readonly enforceOnKey: string;
```

- *Type:* string

---

##### `enforceOnKeyConfigs`<sup>Required</sup> <a name="enforceOnKeyConfigs" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```typescript
public readonly enforceOnKeyConfigs: DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `enforceOnKeyName`<sup>Required</sup> <a name="enforceOnKeyName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```typescript
public readonly enforceOnKeyName: string;
```

- *Type:* string

---

##### `exceedAction`<sup>Required</sup> <a name="exceedAction" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction"></a>

```typescript
public readonly exceedAction: string;
```

- *Type:* string

---

##### `exceedRedirectOptions`<sup>Required</sup> <a name="exceedRedirectOptions" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedRedirectOptions"></a>

```typescript
public readonly exceedRedirectOptions: DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsList</a>

---

##### `rateLimitThreshold`<sup>Required</sup> <a name="rateLimitThreshold" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```typescript
public readonly rateLimitThreshold: DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleRateLimitOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptions">DataGoogleComputeSecurityPolicyRuleRateLimitOptions</a>

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">intervalSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `intervalSec`<sup>Required</sup> <a name="intervalSec" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```typescript
public readonly intervalSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">DataGoogleComputeSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---


### DataGoogleComputeSecurityPolicyRuleRedirectOptionsList <a name="DataGoogleComputeSecurityPolicyRuleRedirectOptionsList" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference <a name="DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeSecurityPolicy } from '@cdktf/provider-google-beta'

new dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions">DataGoogleComputeSecurityPolicyRuleRedirectOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeSecurityPolicyRuleRedirectOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeSecurityPolicy.DataGoogleComputeSecurityPolicyRuleRedirectOptions">DataGoogleComputeSecurityPolicyRuleRedirectOptions</a>

---



