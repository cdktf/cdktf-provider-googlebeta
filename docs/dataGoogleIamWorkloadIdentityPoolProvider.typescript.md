# `data_google_iam_workload_identity_pool_provider`

Refer to the Terraform Registory for docs: [`data_google_iam_workload_identity_pool_provider`](https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/data-sources/google_iam_workload_identity_pool_provider).

# `dataGoogleIamWorkloadIdentityPoolProvider` Submodule <a name="`dataGoogleIamWorkloadIdentityPoolProvider` Submodule" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleIamWorkloadIdentityPoolProvider <a name="DataGoogleIamWorkloadIdentityPoolProvider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/data-sources/google_iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider(scope: Construct, id: string, config: DataGoogleIamWorkloadIdentityPoolProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig">DataGoogleIamWorkloadIdentityPoolProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig">DataGoogleIamWorkloadIdentityPoolProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google-beta'

dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google-beta'

dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google-beta'

dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeCondition">attributeCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeMapping">attributeMapping</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.aws">aws</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList">DataGoogleIamWorkloadIdentityPoolProviderAwsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList">DataGoogleIamWorkloadIdentityPoolProviderOidcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput">workloadIdentityPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput">workloadIdentityPoolProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId">workloadIdentityPoolProviderId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `attributeCondition`<sup>Required</sup> <a name="attributeCondition" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeCondition"></a>

```typescript
public readonly attributeCondition: string;
```

- *Type:* string

---

##### `attributeMapping`<sup>Required</sup> <a name="attributeMapping" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.attributeMapping"></a>

```typescript
public readonly attributeMapping: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.aws"></a>

```typescript
public readonly aws: DataGoogleIamWorkloadIdentityPoolProviderAwsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList">DataGoogleIamWorkloadIdentityPoolProviderAwsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.oidc"></a>

```typescript
public readonly oidc: DataGoogleIamWorkloadIdentityPoolProviderOidcList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList">DataGoogleIamWorkloadIdentityPoolProviderOidcList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolIdInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolIdInput"></a>

```typescript
public readonly workloadIdentityPoolIdInput: string;
```

- *Type:* string

---

##### `workloadIdentityPoolProviderIdInput`<sup>Optional</sup> <a name="workloadIdentityPoolProviderIdInput" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderIdInput"></a>

```typescript
public readonly workloadIdentityPoolProviderIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

---

##### `workloadIdentityPoolProviderId`<sup>Required</sup> <a name="workloadIdentityPoolProviderId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.workloadIdentityPoolProviderId"></a>

```typescript
public readonly workloadIdentityPoolProviderId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleIamWorkloadIdentityPoolProviderAws <a name="DataGoogleIamWorkloadIdentityPoolProviderAws" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google-beta'

const dataGoogleIamWorkloadIdentityPoolProviderAws: dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws = { ... }
```


### DataGoogleIamWorkloadIdentityPoolProviderConfig <a name="DataGoogleIamWorkloadIdentityPoolProviderConfig" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google-beta'

const dataGoogleIamWorkloadIdentityPoolProviderConfig: dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId">workloadIdentityPoolId</a></code> | <code>string</code> | The ID used for the pool, which is the final component of the pool resource name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId">workloadIdentityPoolProviderId</a></code> | <code>string</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/data-sources/google_iam_workload_identity_pool_provider#id DataGoogleIamWorkloadIdentityPoolProvider#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/data-sources/google_iam_workload_identity_pool_provider#project DataGoogleIamWorkloadIdentityPoolProvider#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `workloadIdentityPoolId`<sup>Required</sup> <a name="workloadIdentityPoolId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolId"></a>

```typescript
public readonly workloadIdentityPoolId: string;
```

- *Type:* string

The ID used for the pool, which is the final component of the pool resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/data-sources/google_iam_workload_identity_pool_provider#workload_identity_pool_id DataGoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_id}

---

##### `workloadIdentityPoolProviderId`<sup>Required</sup> <a name="workloadIdentityPoolProviderId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.workloadIdentityPoolProviderId"></a>

```typescript
public readonly workloadIdentityPoolProviderId: string;
```

- *Type:* string

The ID for the provider, which becomes the final component of the resource name.

This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/data-sources/google_iam_workload_identity_pool_provider#workload_identity_pool_provider_id DataGoogleIamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/data-sources/google_iam_workload_identity_pool_provider#id DataGoogleIamWorkloadIdentityPoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.72.1/docs/data-sources/google_iam_workload_identity_pool_provider#project DataGoogleIamWorkloadIdentityPoolProvider#project}.

---

### DataGoogleIamWorkloadIdentityPoolProviderOidc <a name="DataGoogleIamWorkloadIdentityPoolProviderOidc" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google-beta'

const dataGoogleIamWorkloadIdentityPoolProviderOidc: dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleIamWorkloadIdentityPoolProviderAwsList <a name="DataGoogleIamWorkloadIdentityPoolProviderAwsList" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws">DataGoogleIamWorkloadIdentityPoolProviderAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolProviderAws;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderAws">DataGoogleIamWorkloadIdentityPoolProviderAws</a>

---


### DataGoogleIamWorkloadIdentityPoolProviderOidcList <a name="DataGoogleIamWorkloadIdentityPoolProviderOidcList" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.get"></a>

```typescript
public get(index: number): DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference <a name="DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer"></a>

```typescript
import { dataGoogleIamWorkloadIdentityPoolProvider } from '@cdktf/provider-google-beta'

new dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences">allowedAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson">jwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc">DataGoogleIamWorkloadIdentityPoolProviderOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedAudiences`<sup>Required</sup> <a name="allowedAudiences" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.allowedAudiences"></a>

```typescript
public readonly allowedAudiences: string[];
```

- *Type:* string[]

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleIamWorkloadIdentityPoolProviderOidc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleIamWorkloadIdentityPoolProvider.DataGoogleIamWorkloadIdentityPoolProviderOidc">DataGoogleIamWorkloadIdentityPoolProviderOidc</a>

---



